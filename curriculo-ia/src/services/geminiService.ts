import { AIRequest, AIResponse } from '../types/api.types';
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const baseURL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const buildPrompt = (request: AIRequest): string => {
  const contextPrompts: Record<string, string> = {
    summary: `
      Melhore este resumo profissional para um currículo:

      "${request.text}"

      Diretrizes:
      - Mantenha entre 2-3 linhas
      - Use verbos de ação
      - Inclua palavras-chave relevantes da área
      - Tom profissional mas humano
      - Destaque diferenciais e valor agregado
      - Evite clichês e generalidades

      Responda apenas com o texto melhorado, sem explicações:
    `,
    experience: `
      Melhore esta descrição de experiência profissional:

      "${request.text}"

      Diretrizes:
      - Use bullet points ou parágrafos curtos
      - Inicie com verbos de ação (Ex: Desenvolveu, Liderou, Implementou)
      - Quantifique resultados quando possível
      - Destaque responsabilidades e conquistas
      - Use linguagem objetiva e profissional
      - Foque em impacto e valor gerado

      Responda apenas com o texto melhorado, sem explicações:
    `,
    general: `
      Melhore este texto para uso em currículo profissional:

      "${request.text}"

      Diretrizes:
      - Corrija gramática e ortografia
      - Use tom profissional
      - Seja conciso e objetivo
      - Destaque informações relevantes

      Responda apenas com o texto melhorado, sem explicações:
    `,
  };

  return contextPrompts[request.context] || contextPrompts.general;
};

const extractImprovements = (original: string, enhanced: string): string[] => {
  const improvements: string[] = [];

  if (enhanced.length > original.length * 1.2) {
    improvements.push('Texto expandido com mais detalhes');
  }

  if (
    enhanced.toLowerCase().includes('desenvolveu') ||
    enhanced.toLowerCase().includes('implementou') ||
    enhanced.toLowerCase().includes('liderou')
  ) {
    improvements.push('Adicionados verbos de ação');
  }

  if (/\d+/.test(enhanced) && !/\d+/.test(original)) {
    improvements.push('Incluídas métricas quantitativas');
  }

  improvements.push('Melhorada fluência e profissionalismo');

  return improvements;
};

export const enhanceText = async (request: AIRequest): Promise<AIResponse> => {
  if (!apiKey) {
    throw new Error('API key do Gemini não configurada. Verifique o .env');
  }

  try {
    const prompt = buildPrompt(request);

    const response = await fetch(`${baseURL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || 'Erro na API Gemini');
    }

    const data = await response.json();
    const enhancedText: string | undefined =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!enhancedText) {
      throw new Error('Resposta inválida da IA');
    }

    return {
      enhancedText,
      improvements: extractImprovements(request.text, enhancedText),
      confidence: 0.9,
    };
  } catch (error) {
    console.error('Erro no serviço Gemini:', error);
    throw new Error(error instanceof Error ? error.message : 'Erro desconhecido');
  }
};

export const isAvailable = (): boolean => {
  return !!apiKey;
};

export const testConnection = async (): Promise<boolean> => {
  if (!apiKey) return false;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    return response.ok;
  } catch {
    return false;
  }
};

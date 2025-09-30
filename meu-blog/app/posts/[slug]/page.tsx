import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

const posts = {
  "primeiro-post": {
    slug: "primeiro-post",
    title: "Seja bem-vindo ao meu espaço!",
    content: `
      <p>Olá! Que bom ter você por aqui 😊 Este blog nasceu como um espaço para eu compartilhar ideias, aprendizados e reflexões sobre tecnologia, desenvolvimento e um pouco da vida real também.</p>
      
      <h2>Por que decidi criar este blog?</h2>
      <p>Acredito que escrever é uma das melhores formas de consolidar o aprendizado. Aqui você vai encontrar:</p>
      <ul>
        <li>Minhas experiências estudando programação</li>
        <li>Dicas práticas que podem te ajudar</li>
        <li>Reflexões pessoais sobre a área de tecnologia</li>
        <li>Pequenos projetos que desenvolvi</li>
      </ul>
      
      <h2>O que esperar daqui pra frente?</h2>
      <p>Quero trazer conteúdos sobre Next.js, React, TypeScript e outras ferramentas que estou estudando. Também pretendo contar como tem sido minha caminhada na faculdade e no mundo da TI.</p>
      
      <p>Espero que você curta a leitura e participe também!</p>
    `,
    date: "2025-09-05",
    author: "Bruna Santos Moreira",
    likes: 50
  },
  "aprendendo-nextjs": {
    slug: "aprendendo-nextjs",
    title: "Explorando o Next.js 15 com App Router",
    content: `
      <p>O Next.js 15 trouxe muitas novidades, e a principal delas é o App Router. Neste post, compartilho minhas impressões ao aprender essa nova forma de estruturar projetos.</p>
      
      <h2>O que mudou com o App Router?</h2>
      <p>O roteamento agora é baseado em pastas, o que deixa tudo mais intuitivo. Além disso:</p>
      <ul>
        <li>Layouts podem ser reutilizados de forma simples</li>
        <li>Os Server Components melhoram a performance</li>
        <li>Organização do código ficou muito mais clara</li>
      </ul>
      
      <h2>Minha opinião</h2>
      <p>Apesar da curva de aprendizado, o App Router já se mostrou muito poderoso. Estou animada para aplicar em projetos pessoais e acadêmicos!</p>
    `,
    date: "2025-09-07",
    author: "Bruna Santos Moreira",
    likes: 12
  },
  "server-components": {
    slug: "server-components",
    title: "Server Components x Client Components",
    content: `
      <p>O Next.js trouxe uma separação clara entre Server e Client Components. No começo pode parecer confuso, mas na prática faz muito sentido.</p>
      
      <h2>Server Components</h2>
      <p>São processados no servidor e trazem vantagens como:</p>
      <ul>
        <li>Acesso direto a dados sem expor nada ao cliente</li>
        <li>Carregamento inicial mais rápido</li>
        <li>SEO otimizado</li>
      </ul>
      
      <h2>Client Components</h2>
      <p>Entram em cena quando é necessário interatividade (eventos, estados, efeitos do navegador).</p>
      
      <p>O segredo está em equilibrar o uso de ambos para ter aplicações modernas, rápidas e bem organizadas.</p>
    `,
    date: "2025-09-09",
    author: "Bruna Santos Moreira",
    likes: 20
  },
  "tailwind-css": {
    slug: "tailwind-css",
    title: "Tailwind CSS: por que faz sentido usar",
    content: `
      <p>Tailwind CSS virou minha escolha preferida quando o assunto é estilização. Vou explicar o porquê.</p>
      
      <h2>O que gosto no Tailwind</h2>
      <ul>
        <li>Produtividade absurda (estilizar direto no JSX)</li>
        <li>Design consistente com menos esforço</li>
        <li>Ótima adaptação em projetos responsivos</li>
      </ul>
      
      <p>Para quem está começando, pode parecer estranho decorar tantas classes, mas a prática mostra que vale a pena.</p>
    `,
    date: "2025-09-11",
    author: "Bruna Santos Moreira",
    likes: 15
  },
  "projeto-concluido-blog-nextjs-desenvolve": {
    slug: "projeto-concluido-blog-nextjs-desenvolve",
    title: "Concluí meu Projeto de Blog em Next.js 🎉",
    content: `
      <p>Mais uma etapa concluída! Finalizei o Projeto 9 - Blog Pessoal Simples, como parte do programa Desenvolve (Grupo Boticário & Koru).</p>
      <p>Foi um desafio, mas ao mesmo tempo um aprendizado enorme. Pude aplicar conceitos de App Router, Server e Client Components, além de reforçar boas práticas no Next.js.</p>
      <p>Quero agradecer aos colegas e professores que me acompanharam nesse processo. Essa conquista mostra que, com dedicação, cada passo na jornada da programação nos leva mais longe.</p>
      <p>Agora é continuar aprendendo e encarar os próximos desafios!</p>
    `,
    date: "2025-09-13",
    author: "Bruna Santos Moreira",
    likes: 100
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header do post */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center space-x-4">
            <span>Por {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
          </div>
          <LikeButton initialLikes={post.likes} />
        </div>
      </header>

      {/* Conteúdo do post */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 transition-colors">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-700 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Navegação entre posts */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 transition-colors">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Você também pode gostar de:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(posts)
            .filter((p) => p.slug !== post.slug)
            .slice(0, 2)
            .map((relatedPost) => (
              <a
                key={relatedPost.slug}
                href={`/posts/${relatedPost.slug}`}
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(relatedPost.date).toLocaleDateString("pt-BR")}
                </p>
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

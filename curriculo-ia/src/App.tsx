import React, { useState } from "react";
import { Brain, Key, X, CheckCircle } from "lucide-react";
import { useCVData } from "./hooks/useCVData";
import toast, { Toaster } from "react-hot-toast";
import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";
import ExportButton from "./components/Preview/ExportButton";

function App() {
  const cvMethods = useCVData();
  const [apiKey, setApiKeyState] = useState("");
  const [hasApiKey, setHasApiKey] = useState(false);

  const handleApiKeyChange = (value: string) => setApiKeyState(value);

  const handleApiKeySubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedKey = apiKey.trim();
      if (trimmedKey) {
        setHasApiKey(true);
        toast.success(
          "API Key configurada! Agora você pode usar as funcionalidades de IA"
        );
      }
    }
  };

  const handleClearApiKey = () => {
    setApiKeyState("");
    setHasApiKey(false);
    toast("API Key removida - Funcionalidades de IA desabilitadas");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Brain className="h-8 w-8 text-[#FCC6BB]" />
              Meu Currículo Inteligente
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Crie currículos profissionais em segundos com IA.
            </p>
          </div>

          {/* API Key e Export */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center gap-2">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => handleApiKeyChange(e.target.value)}
                onKeyDown={handleApiKeySubmit}
                placeholder="Adicione sua chave de API"
                className={`pl-10 pr-10 py-2 w-64 text-sm border rounded-lg transition-all duration-200 ${
                  hasApiKey
                    ? "border-[#FCC6BB] bg-[#FFF5F4] focus:border-[#F59CA9] focus:ring-[#FCC6BB]/40"
                    : "border-gray-300 bg-white focus:border-[#FCC6BB] focus:ring-[#FCC6BB]/40"
                } focus:outline-none focus:ring-2`}
              />
              {hasApiKey && (
                <button
                  onClick={handleClearApiKey}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Remover API Key"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              {hasApiKey && (
                <div className="flex items-center gap-1 text-[#F59CA9] text-sm font-medium ml-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>IA Ativa</span>
                </div>
              )}
            </div>

            <ExportButton cvData={cvMethods.cvData} />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          <FormSection {...cvMethods} />
          <PreviewSection cvData={cvMethods.cvData} />
        </div>
      </main>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { background: "#2E2E2E", color: "#fff" },
          success: {
            duration: 3000,
            iconTheme: { primary: "#FCC6BB", secondary: "#fff" },
          },
          error: {
            duration: 4000,
            iconTheme: { primary: "#ef4444", secondary: "#fff" },
          },
        }}
      />
    </div>
  );
}

export default App;

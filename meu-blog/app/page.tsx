import PostCard from "@/components/PostCard";

// Dados mockados dos posts (em um projeto real, viriam de uma API ou banco de dados)
const posts = [
  {
    slug: "primeiro-post",
    title: "Olá, esse é o início do Blog da Bruna!",
    excerpt:
      "Seja bem-vindo ao meu espaço pessoal na web! Aqui vou registrar minhas ideias, estudos em programação e algumas reflexões sobre tecnologia e aprendizado.",
    date: "2025-09-05",
    author: "Bruna Santos Moreira",
  },
  {
    slug: "aprendendo-nextjs",
    title: "Primeiros passos com Next.js 15 e App Router",
    excerpt:
      "Estou explorando o Next.js 15 com o novo App Router e descobrindo como é prático criar aplicações modernas com React. Vem comigo nessa jornada!",
    date: "2025-09-07",
    author: "Bruna Santos Moreira",
  },
  {
    slug: "server-components",
    title: "Server Components vs Client Components",
    excerpt:
      "Uma das partes mais interessantes do Next.js é entender quando usar Server Components e quando usar Client Components. Aqui explico as diferenças de forma prática.",
    date: "2025-09-09",
    author: "Bruna Santos Moreira",
  },
  {
    slug: "tailwind-css",
    title: "Minha experiência com Tailwind CSS",
    excerpt:
      "No início estranhei o Tailwind CSS, mas logo percebi como ele acelera a estilização e deixa o código mais limpo. Vou contar como estou aplicando no meu blog.",
    date: "2025-09-11",
    author: "Bruna Santos Moreira",
  },
  {
    slug: "projeto-concluido-blog-nextjs-desenvolve",
    title: "Concluí meu Projeto 9 do Programa Desenvolve",
    excerpt:
      "Mais uma conquista na minha formação: finalizei o projeto de blog pessoal em Next.js! Um desafio cheio de aprendizados que compartilho neste post.",
    date: "2025-09-13",
    author: "Bruna Santos Moreira",
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Cabeçalho da página */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-4">
          Blog da Bruna
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Um espaço para compartilhar ideias, aprendizados e conquistas na
          área de tecnologia e além. 💻✨
        </p>
      </div>

      {/* Lista de posts */}
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Seção de destaque */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl p-10 text-center shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Obrigada pela visita! 🚀
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Este blog faz parte da minha jornada no{" "}
          <span className="font-semibold">Programa Desenvolve</span>. Aqui
          registro meu progresso, compartilho recursos e conecto com outros
          apaixonados por tecnologia.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-200 text-indigo-900 dark:bg-indigo-700 dark:text-white">
            Next.js 15
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-green-900 dark:bg-green-700 dark:text-white">
            TypeScript
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-200 text-pink-900 dark:bg-pink-700 dark:text-white">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}

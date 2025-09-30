import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header da página */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Sobre mim
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Um pouco mais sobre quem escreve neste blog ✨
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 transition-colors">
        <div className="prose prose-lg max-w-none">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            {/* Foto com borda degradê personalizada */}
            <div className="flex-shrink-0">
              <div className="w-28 h-32 p-1 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center">
                <Image
                  src="/minhaft.jpeg"
                  alt="Foto de Bruna"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Texto de apresentação */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Bruna Santos Moreira
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Estudante apaixonada por tecnologia e desenvolvimento de sistemas. 
                Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> 
                e utilizo este blog para compartilhar aprendizados, reflexões e projetos 
                criados ao longo da minha jornada acadêmica e pessoal.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-white">
                  Next.js
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white">
                  TypeScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* Minha História */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Minha Jornada
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sempre gostei de aprender coisas novas e encontrei na tecnologia um
                espaço para unir criatividade e lógica. O curso de ADS tem me permitido
                entender melhor o mundo do desenvolvimento e usar a programação como
                ferramenta para resolver problemas e criar soluções reais.
                Participar do programa Desenvolve com Boticário e Koru é uma experiência que me proporciona
                aprendizado prático, contato com metodologias ágeis e a oportunidade de desenvolver
                projetos inovadores aplicando conhecimentos técnicos e criativos.
              </p>
            </div>

            {/* Conteúdo do Blog */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                O que você encontra aqui
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Experiências práticas de aprendizado em programação</li>
                <li>Estudos sobre Next.js, React e outras ferramentas modernas</li>
                <li>Projetos desenvolvidos durante a faculdade</li>
                <li>Dicas para estudantes de tecnologia</li>
                <li>Reflexões sobre carreira e futuro em TI</li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Vamos nos conectar!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fique à vontade para me chamar nas redes sociais ou enviar um e-mail. 
                Adoro trocar ideias e aprender junto com outras pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de contato */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 transition-colors">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Entre em contato
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram */}
          <div className="text-center">
            <div className="bg-pink-200 dark:bg-pink-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f58529" />
                    <stop offset="0.5" stopColor="#dd2a7b" />
                    <stop offset="1" stopColor="#515bd4" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGradient)" />
                <circle cx="12" cy="12" r="3.5" fill="white" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="white" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Instagram</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">@brunamoreira</p>
          </div>

          {/* LinkedIn */}
          <div className="text-center">
            <div className="bg-blue-200 dark:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">LinkedIn</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">bruna-moreira</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-red-200 dark:bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-red-600 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Email</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">brunamoreira@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

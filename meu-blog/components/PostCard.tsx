import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift group">
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="font-medium">{post.author}</span>
          <time dateTime={post.date} className="text-gray-400">
            {new Date(post.date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            href={`/posts/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-200 group-hover:translate-x-1"
          >
            Ler mais
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
          
          {/* Indicador visual de categoria */}
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></span>
            <span className="w-2 h-2 bg-green-400 rounded-full opacity-60"></span>
            <span className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></span>
          </div>
        </div>
      </div>
      
      {/* Barra de progresso decorativa */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </article>
  );
}


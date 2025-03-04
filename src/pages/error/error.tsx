import { Link } from "react-router-dom";

export function ErrorPage(){
  return(
    <div className="flex w-full justify-center min-h-screen items-center flex-col text-white">
      <h1 className="font-bold text-5xl mb-5">404</h1>
      <h1 className="font-bold text-4xl mb-4">Pagina nao encontrada</h1>
      <p className="italic text-1xl mb-4 ">Voce caiu em uma pagina que nao existe!</p>
      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to={"/"}>
      Voltar para home
      </Link>
    </div>
  )
}
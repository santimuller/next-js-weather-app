import { FC, ReactElement } from 'react'
import  Link from 'next/link'
import Router from 'next/router'

interface HeaderProps{
  backBtn?: boolean
  backBtnAction?: () => {}
}

const Header:FC<HeaderProps> = ({
  backBtn, 
  backBtnAction = () => Router.back()
}):ReactElement => {
  
  return (
    <header className="p-4 bg-gray-300">
      <div className="flex items-center ml-4">
        {backBtn && (
          <button type="button" className="mr-4" onClick={backBtnAction}>
            <span className="text-indigo-700 mdi mdi-arrow-left text-3xl" />
          </button>
        )}
        <Link href="/">
          <div className="flex items-center">
            <img className="cursor-pointer" src="/logo.png" alt="Logo de Weather app"/>
            <div className="pl-2 family-bold cursor-pointer text-indigo-700 font-bold text-lg">Weather App</div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
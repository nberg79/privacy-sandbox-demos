/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import { Metadata } from "next"
import Link from "next/link"
import "../styles/globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const { SHOP_DETAIL } = process.env
  return {
    title: SHOP_DETAIL,
    description: SHOP_DETAIL,
    icons: {
      icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"
    }
  }
}

const Header = () => {
  return (
    <header className="flex flex-col">
      <nav className="flex justify-between lg:py-6 py-2 border-b-2">
        <h1 className="text-slate-800 text-4xl font-bold">
          <Link href="/">Shopping DEMO</Link>
        </h1>
        <Link href="/cart" className="text-4xl px-2">
          🛒
        </Link>
      </nav>
    </header>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}




export default function MainKV({ children }) {

  return (
    <>
      <main className={`${true} bg-pink-100 
        container 
        md:container 
        md:mx-auto`
        }>

        <h2>Main Heading</h2>
              {children}
        </main>
    </>
  )
}


// ${inter.variable} 



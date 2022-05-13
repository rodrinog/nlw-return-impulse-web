interface ButtonProps {
  text?: string; // usando ponto de interrogação a propriedade torna-se opcional
}

function Button(props: ButtonProps) {
  console.log(props.text)

  return <button className="bg-blue-600 px-5 h-7 rounded-xl text-cyan-400 hover:bg-blue-900 transition-colors">{props.text ?? 'Default'}</button>
  // na expressão acima, caso props.text não receba valor o texto Default será usasdo
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="Ok" />
    </div>
  )

}

export default App

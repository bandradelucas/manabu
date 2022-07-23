import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button/Button'
import { TextField } from '../components/Form/TextField/TextField'

const DocumentGenerator: NextPage = () => {
  const [document, setDocument] = useState('');

  // function documentChange(event: FormEvent) {
  //   setDocument('123.123.123-12');
  // }

  function handleGenerate() {
    console.log('yay');
  }

  return (
    <>
      <h1>Document Generator</h1>
      <TextField value={document} onChange={(event: FormEvent) => setDocument(event.target.value)} placeholder="hehehe" />
      {document}
      <Button onClick={handleGenerate}>Generate!</Button>
    </>
  )
}

export default DocumentGenerator

import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import { Button } from '../components/Button/Button'
import { TextField } from '../components/Form/TextField/TextField'
import { CPFGenerator } from '../utils/CPFGenerator'

const DocumentGenerator: NextPage = () => {
  const [document, setDocument] = useState('');

  function handleGenerate() {
    setDocument(CPFGenerator('sp'));
  }

  return (
    <>
      <h1>Document Generator</h1>
      <TextField
        value={document}
        placeholder="hehehe"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setDocument(event.target.value)}
      />
      <Button onClick={handleGenerate}>Generate!</Button>
      <div>
        {document}
      </div>
    </>
  )
}

export default DocumentGenerator

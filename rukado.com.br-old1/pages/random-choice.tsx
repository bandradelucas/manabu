import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../components/Button/Button'
import { TextArea } from '../components/Form/TextField/TextArea'

const RandomChoice: NextPage = () => {
  const [choices, setChoices] = useState('1\n2\n3');
  const [choice, setChoice] = useState('');
  const [histories, setHistories] = useState<string[]>([]);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    function addHistory() {
      setHistories(histories => [...histories, choice]);
    }

    if (choice != '') {
      addHistory();
    }
  }, [choice]);

  // useEffect(() => {
  //   const statistics = histories.reduce((previousValue, currentValue) => {
  //     return {};
  //   });

  //   setStatistics(statistics);
  // }, [histories])

  function handleRandom() {
    const choicesArray = choices.split('\n');

    setChoice(choicesArray[Math.floor(Math.random() * choicesArray.length)]);
  }



  function handleHistoryClear() {
    setHistories([]);
    localStorage.setItem('histories', '');
  }

  return (
    <>
      <h1>Random Choice</h1>
      <div className="grid grid-cols-[3fr,2fr] gap-5">
        <div>
          <TextArea
            full
            value={choices}
            rows={3}
            placeholder={"Option 1\nOption 2\nOption 3"}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setChoices(event.target.value)}
          />
          <Button full color="primary" onClick={handleRandom}>Random!</Button>
          <div>
            choice: {choice}<br />

          </div>
        </div>
        <div>
          <h2>History</h2>
          <div className="bg-gray-700 min-h-[6em]">
            {histories.map((history, index) => <div key={index}>{history}</div>)}
          </div>
          <Button full onClick={handleHistoryClear}>Clear</Button>
          {/* <h2>Statistics</h2>
          {statistics.map((statistic, index) => <div key={index}>{statistic}</div>)} */}
        </div>
      </div>

    </>
  )
}

export default RandomChoice;
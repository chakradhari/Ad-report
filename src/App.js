import { useState } from 'react';
import './App.css';

const mockData = [
  {
    id: '1',
    name: 'Chakradhari',
    jobDescription: 'Cook',
    fromDate: '12/03/2022',
    jobLocation: 'Hyderabad',
    wagePerDay: 1000,
    toDate: '11/04/2022',
    phoneNumber: 999999999,
  },
  {
    id: '2',
    name: 'Yashodara',
    jobDescription: 'Cook',
    fromDate: '12/03/2022',
    jobLocation: 'Mumbai',
    wagePerDay: 1000,
    toDate: '11/04/2022',
    phoneNumber: 999999999,
  },
  {
    id: '3',
    name: 'Deepika',
    jobDescription: 'Cook',
    fromDate: '12/03/2022',
    jobLocation: 'Delhi',
    wagePerDay: 1000,
    toDate: '11/04/2022',
    phoneNumber: 999999999,
  },
  {
    id: '4',
    name: 'Nikitha',
    jobDescription: 'Maid',
    fromDate: '12/03/2022',
    jobLocation: 'Delhi',
    wagePerDay: 1000,
    toDate: '11/04/2022',
    phoneNumber: 999999999,
  },
];

function App() {
  const [userVal, setUserVal] = useState('');
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (
      mockData.filter((person) => person.jobDescription === userVal).length > 0
    ) {
      setList(mockData.filter((person) => person.jobDescription === userVal));
    } else if (
      mockData.filter((person) => person.jobLocation === userVal).length > 0
    ) {
      setList(mockData.filter((person) => person.jobLocation === userVal));
    } else {
      setList([]);
    }
  };

  console.log(list);

  return (
    <div className="App">
      <section className="search-section">
        <input
          type="text"
          placeholder="Type here to search"
          onChange={(e) => setUserVal(e.target.value)}
          value={userVal}
        />
        <button id="searchButton" onClick={handleClick}>
          Search
        </button>
      </section>
      <section className="display-search-results">
        {list &&
          list.map((person, i) => (
            <div key={person.id} id={`cusGrid${i + 1}`} className="cusGrid">
              <div>
                <span>Name: {person.name}</span>
                <span>Job Descripton: {person.jobDescription}</span>
              </div>

              <div>
                <span>From Date: {person.fromDate}</span>
                <span>To Date: {person.toDate}</span>
              </div>

              <div>
                <span>Wage per day: {person.wagePerDay}</span>
                <span>Job Location: {person.jobLocation}</span>
              </div>

              <div>
                <span>Phone Number: {person.phoneNumber}</span>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default App;

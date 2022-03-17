import { useState, useEffect } from 'react';
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
    noOfApplied: 2,
    candidates: 3,
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
    noOfApplied: 4,
    candidates: 5,
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
    noOfApplied: 2,
    candidates: 4,
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
    noOfApplied: 4,
    candidates: 7,
  },
];

function App() {
  const [userVal, setUserVal] = useState('');
  const [list, setList] = useState(mockData);

  useEffect(() => {
    if (userVal !== '') {
      if (
        mockData.filter((person) =>
          person.jobDescription.toLowerCase().startsWith(userVal.toLowerCase())
        ).length > 0
      ) {
        setList(
          mockData.filter((person) =>
            person.jobDescription
              .toLowerCase()
              .startsWith(userVal.toLowerCase())
          )
        );
      } else if (
        mockData.filter((person) =>
          person.jobLocation.toLowerCase().startsWith(userVal.toLowerCase())
        ).length > 0
      ) {
        setList(
          mockData.filter((person) =>
            person.jobLocation.toLowerCase().startsWith(userVal.toLowerCase())
          )
        );
      }
    } else {
      setList(mockData);
    }
  }, [userVal]);

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          size="50"
          value={userVal}
          onChange={(e) => setUserVal(e.target.value)}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Job Id/ Description</th>
            <th>Job Location</th>
            <th>Number of applied</th>
            <th>Candidates</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((job) => (
              <tr key={job.id}>
                <td>{job.jobDescription}</td>
                <td>{job.jobLocation}</td>
                <td>{job.noOfApplied}</td>
                <td>{job.candidates}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

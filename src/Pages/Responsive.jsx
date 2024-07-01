const Responsive = () => {
  const mockedData = [
    { name: 'Dan', age: 24, gender: 'Male' },
    { name: 'Kate', age: 26, gender: 'Female' },
    { name: 'Josh', age: 27, gender: 'Male' }
  ];

  return (
    <>
      <div>
        <h1 className="heading-primary">Responsiveness</h1>
      </div>
      <div className="flex-parent-element">
        <div className="flex-child-element">
          <p className="paragraph margin-left">Box 1</p>
        </div>
        <div className="flex-child-element">
          <p className="paragraph margin-left">Box 2</p>
        </div>
        <div className="flex-child-element">
          <p className="paragraph margin-left">Box 3</p>
        </div>
        <div className="flex-child-element">
          <p className="paragraph margin-left">Box 4</p>
        </div>
      </div>
      <div className="table-container">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <table rules="rows">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {mockedData.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Responsive;

const CvDisplay = ({ personalData, workList, onDelete }) => {
  const CvPersonalData = ({ data }) => {
    return (
      <div className="personal-entries">
        <h1>{data.name}</h1>
        <h3>{data.title}</h3>
        <div className="contact-info">
          <p>Contact: {data.contact}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}</p>
        </div>
      </div>
    );
  };

  const handleDelete = (id) => {
    workList.filter((entry) => {
      entry.id !== id;
    });
  }

  const CvWorkList = ({ data }) => {
    return (
      <div className="work-entries">
        {data && data.map((entry, index) => {
          return (
          <div key={entry.id}>
            <div>
            <h3>{entry.company}</h3>
            <h4>{entry.position}</h4>
            <p>
              {entry.duration.start} - {entry.duration.end}
            </p>
            {entry.tasks && (
              <p>
                {entry.tasks}
              </p>
            )}
            </div>
            <button type="button" onClick={() => onDelete(entry.id)}>Delete</button>
          </div>)
        })}
      </div>
    );
  };

  return (
    <div className="cv-display">
      <div className="personal-details">
        <CvPersonalData data={personalData} />
      </div>
      <div className="work-entries">
        <CvWorkList data={workList} />
      </div>
    </div>
  );
};

export default CvDisplay;

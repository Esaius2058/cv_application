const CvDisplay = ({ personalData, workList, educationList, onDeleteWork, onDeleteEducation, onEditWork, onEditEducation }) => {
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

  const CvWorkList = ({ data }) => {
    return (
      <div className="work-entries">
        {data && data.map((entry) => {
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
            <button type="button" onClick={() => onDeleteWork(entry.id)}>Delete</button>
            <button type="button" onClick={() => onEditWork(entry.id)}>Edit</button>
          </div>)
        })}
      </div>
    );
  };

  const CvEducationList = ({data}) => {
    return(
      <div className="education-entries">
        {data && data.map((entry) => {
          return(
            <div key={entry.id}>
              <div>
                <h3>{entry.course}</h3>
                <p><span>Institution: </span>{entry.institution}</p>
                <p><span>Duration: </span>{entry.duration.start} - {entry.duration.end}</p>
              </div>
              <button type="button" onClick={() => onDeleteEducation(entry.id)}>Delete</button>
              <button type="button" onClick={() => onEditEducation(entry.id)}>Edit</button>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="cv-display">
      <div className="personal-details">
        <CvPersonalData data={personalData} />
      </div>
      <div className="work-entries">
        <CvWorkList data={workList} />
      </div>
      <div className="education-entries">
        <CvEducationList data={educationList} />
      </div>
    </div>
  );
};

export default CvDisplay;

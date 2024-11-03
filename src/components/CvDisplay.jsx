const CvDisplay = ({ personalData, workList, educationList, skillList, onDeleteWork, onDeleteEducation, onEditWork, onEditEducation, onEditSkill}) => {
  const CvPersonalData = ({ data }) => {
    return (
      <div className="section">
        <div className="cv-header">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <div className="contact-info">
            <p>Contact: {data.contact}</p>
            <p>Email: {data.email}</p>
            <p>Address: {data.address}</p>
          </div>
        </div>
      </div>
    );
  };

  const CvWorkList = ({ data }) => {
    return (
      <div className="section">
        <h3>Work Experience</h3>
        {data && data.map((entry) => (
          <div key={entry.id} className="work-entry">
            <div className="entry-header">
              <div>
                <div className="company-name">{entry.company}</div>
                <div className="position-title">{entry.position}</div>
                <div className="duration">
                  {entry.duration.start} - {entry.duration.end}
                </div>
              </div>
            </div>
            {entry.tasks && (
              <div className="tasks">{entry.tasks}</div>
            )}
            <div className="action-buttons">
              <button type="button" onClick={() => onEditWork(entry.id)} className="edit-button">
                Edit
              </button>
              <button type="button" onClick={() => onDeleteWork(entry.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CvEducationList = ({data}) => {
    return (
      <div className="section">
        <h3>Education</h3>
        {data && data.map((entry) => (
          <div key={entry.id} className="education-entry">
            <div className="entry-header">
              <div>
                <div className="course-title">{entry.course}</div>
                <div className="institution-name">{entry.institution}</div>
                <div className="duration">
                  {entry.duration.start} - {entry.duration.end}
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button type="button" onClick={() => onEditEducation(entry.id)} className="edit-button">
                Edit
              </button>
              <button type="button" onClick={() => onDeleteEducation(entry.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CvSkillList = ({data}) => {
    return (
      <div className="section">
        <h3>Skills</h3>
        <div className="skills-section">
          {data && data.map((entry, index) => (
            <span key={`skill-${index}`} className="skill">
              {entry}
            </span>
          ))}
        </div>
        <div className="action-buttons">
          <button type="button" onClick={onEditSkill} className="edit-button">
            Edit Skills
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cv-display">
      <CvPersonalData data={personalData} />
      <CvWorkList data={workList} />
      <CvEducationList data={educationList} />
      <CvSkillList data={skillList} />
    </div>
  );
};

export default CvDisplay;
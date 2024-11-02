const WorkEntry = ({
  workData = {},
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit} title="work">
        <fieldset>
          <legend>Work Experience</legend>
          <label htmlFor="company">Company Name: </label>
          <input
            type="text"
            name="company"
            id="company"
            value={workData.company}
            onChange={onChange}
          />
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            value={workData.position}
            onChange={onChange}
          />
          <label htmlFor="tasks">Tasks: </label>
          <textarea
              name="tasks"
              id="tasks"
              value={workData.tasks}
              placeholder="Generating financial systems, Account Management"
              onChange={onChange}
            />
          <label htmlFor="duration"></label>
          <span>From: </span>
          <input
            type="date"
            name="duration.start"
            id="durationStart"
            value={workData.duration?.start || ""}
            onChange={onChange}
          />
          <span>To: </span>
          <input
            type="date"
            name="duration.end"
            id="durationEnd"
            value={workData.duration?.end || ""}
            onChange={onChange}
          />
        </fieldset>
        <button type="submit">Save Experience</button>
      </form>
    </div>
  );
};

export default WorkEntry;

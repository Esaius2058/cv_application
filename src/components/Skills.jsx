const Skills = ({ skill, count, onSubmit, onChange, isEditing, onResubmit}) => {
  return (
    <form onSubmit={isEditing ? onResubmit : onSubmit} title="skills">
      <fieldset>
        <legend>Skills</legend>
          <input
            type="text"
            name={`skill${count}`}
            id={`skill${count}`}
            value={skill}
            onChange={onChange}
          />
      </fieldset>
      <button type="submit">{isEditing ? 'Save Changes' : 'Save'}</button>
    </form>
  );
};

export default Skills;
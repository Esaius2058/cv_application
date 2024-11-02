const EducationEntry = ({educationData={}, onChange, onSubmit}) => {
    return(
        <div>
            <form onSubmit={onSubmit} title="education">
            <fieldset>
                <legend>Education</legend>
                <label htmlFor="course">Course Title: </label>
                <input 
                    type="text" 
                    name="course"
                    id="course"
                    value={educationData.course}
                    onChange={onChange}
                />
                <label htmlFor="institution">Institution: </label>
                <input 
                    type="text" 
                    name="institution" 
                    id="institution" 
                    value={educationData.institution}
                    onChange={onChange}
                />
                <label htmlFor="duration"></label>
                <span>From: </span>
                <input 
                    type="date" 
                    name="duration.start" 
                    id="durationStart"
                    onChange={onChange}
                    value={educationData.duration.start} 
                />
                <span>To: </span>
                <input 
                    type="date" 
                    name="duration.end" 
                    id="durationEnd" 
                    onChange={onChange}
                    value={educationData.duration.end}
                />
            </fieldset>
            <button type="submit">Save Entry</button>
        </form>
        </div>
    )
}

export default EducationEntry;
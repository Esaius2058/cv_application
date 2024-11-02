const PersonalDetails = ({details = {}, handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit} title="personal">
            <fieldset className="personal-entries">
                <legend>Personal Information</legend>
                <label htmlFor="name">Full Name: </label>
                <input type="text" id="name" name="name" value={details.name || ""} onChange={handleChange} required/>
                <label htmlFor="name">Title: </label>
                <input type="text" id="title" name="title" value={details.title || ""} onChange={handleChange} required/>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={details.email || ""} onChange={handleChange} required/>
                <label htmlFor="contact">Contact: </label>
                <input type="tel" name="contact" id="contact" value={details.contact || ""} onChange={handleChange} required/>
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" value={details.address || ""} onChange={handleChange} required/>
            </fieldset>
            <button type="submit">Save Details</button>
    </form>
    );
}

export default PersonalDetails;
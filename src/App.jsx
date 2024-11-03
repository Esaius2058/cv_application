import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkEntry from "./components/ProfessionalXp";
import EducationEntry from "./components/Education";
import CvDisplay from "./components/CvDisplay";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    title: "",
    contact: "",
    email: "",
    address: "",
  });

  const [workData, setWorkData] = useState({
    id: 1,
    company: "",
    position: "",
    duration: {
      start: "",
      end: "",
    },
    tasks: "",
  });

  const [workList, setWorkList] = useState([
    {
      id: 1,
      company: "",
      position: "",
      duration: {
        start: "",
        end: "",
      },
      tasks: "",
    },
  ]);

  const [educationData, setEducationData] = useState({
    id: 1,
    course: "",
    duration: {
      start: "",
      end: "",
    },
  });

  const [educationList, setEducationList] = useState([
    {
      id: 1,
      course: "",
      duration: {
        start: "",
        end: "",
      },
    },
  ]);

  const [skill, setSkill] = useState(""); // for form inputs
  const [skillList, setSkillList] = useState([]);
  const [count, setCount] = useState(0);
  const [editingSkills, setEditingSkills] = useState(false); 

  const handleSubmitPersonal = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newData = {
      name: formData.get("name"),
      title: formData.get("title"),
      contact: formData.get("contact"),
      email: formData.get("email"),
      address: formData.get("address"),
    };

    setPersonalData(newData);
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setWorkData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setWorkData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmitWork = (e) => {
    e.preventDefault();

    const newEntry = {
      id: workData.id,
      company: workData.company,
      position: workData.position,
      duration: {
        start: workData.duration.start,
        end: workData.duration.end,
      },
      tasks: workData.tasks,
    };

    setWorkList((prevList) => {
      const existingEntryIndex = prevList.findIndex(
        (entry) => entry.id === newEntry.id
      );

      if (existingEntryIndex !== -1) {
        // Update existing entry
        const updatedList = [...prevList];
        updatedList[existingEntryIndex] = newEntry;
        return updatedList;
      } else {
        // Add new entry
        return [...prevList, newEntry];
      }
    });

    setWorkData({
      id: workData.id + 1,
      company: "",
      position: "",
      duration: {
        start: "",
        end: "",
      },
      tasks: "",
    });
  };

  const handleDeleteWork = (id) => {
    setWorkList((prevList) => prevList.filter((entry) => entry.id !== id));
  };

  const handleEditWork = (id) => {
    let chosenEntry = null;
    for(let i = 0; i < workList.length; i++){
      if(workList[i].id === id){
        chosenEntry = i;
      }
    }

    //Populate the work inputs with the chosen data
    setWorkData({
      id: id,
      company: workList[chosenEntry].company,
      position: workList[chosenEntry].position,
      duration: {
        start: workList[chosenEntry].duration.start,
        end: workList[chosenEntry].duration.end,
      },
      tasks: workList[chosenEntry].tasks,
    });

    //Remove the entry from worklist
    setWorkList((prevList) => prevList.filter((entry) => entry.id !== id));
  }

  const handleSubmitEducation = (e) => {
    e.preventDefault();

    const newEntry = {
      id: educationData.id,
      course: educationData.course,
      institution: educationData.institution,
      duration: {
        start: educationData.duration.start,
        end: educationData.duration.end,
      },
    };

    setEducationList((prevEntries) => [...prevEntries, newEntry]);

    setEducationData({
      id: educationData.id + 1,
      course: "",
      institution: "",
      duration: {
        start: "",
        end: "",
      },
    });
  };


  const handleEducationChange = (e) => {
    const {name, value} = e.target;

    if(name.includes(".")){
      const [parent, child] = name.split(".");
      setEducationData((prevEntries) => ({
        ...prevEntries,
        [parent]: {
          ...prevEntries[parent],
          [child]: value,
        }
      }));
    }else{
      setEducationData((prevEntries) => ({
        ...prevEntries,
        [name]: value,
      }));
    }
  }

  const handleDeleteEducation = (id) => {
    setEducationList((prevList) => prevList.filter((entry) => entry.id !== id));
  }

  const handleEditEducation = (id) => {
    let chosenEntry = null;
    for(let i = 0; i < educationList.length; i++){
      if(educationList[i].id === id){
        chosenEntry = i;
      }
    }

    //Populate the education inputs with the chosen data
    setEducationData({
      id: id,
      course: educationList[chosenEntry].course,
      institution: educationList[chosenEntry].institution,
      duration: {
        start: educationList[chosenEntry].duration.start,
        end: educationList[chosenEntry].duration.end,
      }
    });

    //Remove the entry from education list
    setEducationList((prevList) => prevList.filter((entry) => entry.id !== id));
  }

  const handleSubmitSkill = (e) => {
    e.preventDefault();
    if (!skill.trim()) return;
    
    setSkillList([...skillList, skill]);
    setSkill("");
    setCount(count + 1);
  }

  const handleChangeSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleEditSkills = () => {
    setEditingSkills(true);
    setSkill(skillList.join(', ')); 
    setSkillList([]); 
  }

  const handleResubmitSkills = (e) => {
    e.preventDefault();

    const skillsArray = skill.split(',').map(s => s.trim()).filter(s => s !== '');
    setSkillList(skillsArray);
    setSkill('');
    setEditingSkills(false);
  }

  return (
    <div className="container">
      <div className="entry-container">
        <PersonalDetails
          details={personalData}
          handleChange={handlePersonalChange}
          handleSubmit={handleSubmitPersonal}
        />
        <WorkEntry
          workData={workData}
          onChange={handleWorkChange}
          onSubmit={handleSubmitWork}
        />
        <EducationEntry
          educationData={educationData}
          onChange={handleEducationChange}
          onSubmit={handleSubmitEducation}
        />
        <Skills 
          skill={skill}
          count={count}
          onChange={handleChangeSkill}
          onSubmit={handleSubmitSkill}
          onResubmit={handleResubmitSkills}
          isEditing={editingSkills}
        />
      </div>

      <div className="display-container">
        <CvDisplay
          personalData={personalData}
          workList={workList}
          educationList={educationList}
          skillList={skillList}
          onDeleteEducation={handleDeleteEducation}
          onDeleteWork={handleDeleteWork}
          onEditWork={handleEditWork}
          onEditEducation={handleEditEducation}
          onEditSkill={handleEditSkills}
        />
      </div>
    </div>
  );
}

export default App;

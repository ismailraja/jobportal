import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Option.css";


const [workExperiences, setWorkExperiences] = useState([
    // ... existing work experiences ...
    {
      title: 'Tester',
      company: 'Microsoft',
      startDate: '2023-01',
      endDate: 'Present',
      location: 'Singapore, Singapore',
      description: 'Tester Application',
    },
  ]);

  // ... existing code ...

const [educationHistory, setEducationHistory] = useState([
    // ... existing education history ...
    {
      school: 'SJC',
      degree: 'Bachelor of Business Administration (BBA)',
      fieldOfStudy: 'Computer Science',
      startDate: '2010',
      endDate: '2013',
      description: 'BSC',
    },
  ]);
  
  const [hourlyRate, setHourlyRate] = useState(70);
const serviceFee = hourlyRate * 0.1;
const amountReceived = hourlyRate - serviceFee;
  // ... existing code ...
function WorkExperienceTile({ title, company, startDate, endDate, location, description }) {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <p>{startDate} - {endDate}</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    );
  }

  function EducationTile({ school, degree, fieldOfStudy, startDate, endDate, description }) {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>{school}</h2>
        <h3>{degree}</h3>
        <p>{fieldOfStudy}</p>
        <p>{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
    );
  }

function Multistepcvbuilder() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <div className="option">
          <h1>Welcome to Job Portal</h1>


            <br></br>
            <h2>How would you like to tell us about yourself? </h2>
          <h4>1/10 Create your profile 5-10 min</h4>
          <h3>We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.</h3>
          <Link to="/registerclient" className="option-button">
            Import from LinkedIn
          </Link>
          <Link to="/registerfreelancer" className="option-button">
            Upload Resume
          </Link>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
          <button onClick={nextStep}>Fillout Manually (10 Min)</button>
        </div>
      );
    case 2:
      return (
        <div className="option">
          <h1>Step 2: Enter your details</h1>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );

      case 3:
  return (
    <div className="option">
      <h1>Step 3: Add a title to tell the world what you do</h1>
      <p>It’s the very first thing clients see, so make it count. Stand out by describing your expertise in your own words.</p>
      <label>
        Your professional role:
        <input type="text" name="title" placeholder="Software Engineer | Javascript | iOS" minLength="4" required />
      </label>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  case 4:
  return (
    <div className="option">
      <h1>Step 4: Add your work experience</h1>
      <p>If you have relevant work experience, add it here. Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.</p>
      <label>
        Add experience:
        <textarea name="experience" required />
      </label>

      {workExperiences.map((experience, index) => (
  <WorkExperienceTile key={index} {...experience} />
))}
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );


case 5:
    return (
      <div className="option">
        <h1>Step 5: Add Work Experience</h1>
        <label>
          Title:
          <input type="text" name="title" placeholder="Ex: Software Engineer" required />
        </label>
        <label>
          Company:
          <input type="text" name="company" placeholder="Ex: Microsoft" required />
        </label>
        <label>
          Location:
          <input type="text" name="location" placeholder="Ex: London" />
        </label>
        <label>
          I am currently working in this role:
          <input type="checkbox" name="currentRole" />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" required />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" />
        </label>
        <label>
          Description:
          <textarea name="description" />
        </label>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );

    // ... existing code ...

case 6:
    return (
      <div className="option">
        <h1>Step 6: Add your education</h1>
        <p>Clients like to know what you know - add your education here. You don’t have to have a degree. Adding any relevant education helps make your profile more visible.</p>
        <label>
          Add education:
          <textarea name="education" required />
        </label>

        {educationHistory.map((education, index) => (
  <EducationTile key={index} {...education} />
))}
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );

    case 7:
  return (
    <div className="option">
      <h1>Step 7: Add Education History</h1>
      <label>
        School:
        <input type="text" name="school" placeholder="Ex: Northwestern University" required />
      </label>
      <label>
        Degree:
        <input type="text" name="degree" placeholder="Ex: Bachelors" />
      </label>
      <label>
        Field of Study:
        <input type="text" name="fieldOfStudy" placeholder="Ex: Computer Science" />
      </label>
      <label>
        Dates Attended:
        <input type="date" name="startDate" required />
        <input type="date" name="endDate" />
      </label>
      <label>
        Description:
        <textarea name="description" placeholder="Describe your studies, awards, etc." />
      </label>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  // ... existing code ...

case 8:
    return (
      <div className="option">
        <h1>Step 8: Add your languages</h1>
        <p>Upwork is global, so clients are often interested to know what languages you speak. English is a must, but do you speak any other languages?</p>
        <label>
          Language:
          <input type="text" name="language" placeholder="Ex: Spanish" required />
        </label>
        <label>
          Proficiency:
          <select name="proficiency" required>
            <option value="">Select proficiency</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="native">Native</option>
          </select>
        </label>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  
    // ... existing code ...

case 9:
    return (
      <div className="option">
        <h1>Step 9: Add your skills</h1>
        <p>Nearly there! What work are you here to do? Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add or remove the ones we’ve suggested, or start typing to pick more. It’s up to you.</p>
        <label>
          Your skills:
          <input type="text" name="skills" placeholder="Enter skills here" required />
        </label>
        <p>Max 15 skills. At least one skill is required.</p>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  

    // ... existing code ...

case 10:
    return (
      <div className="option">
        <h1>Step 10: Write your bio</h1>
        <p>Great. Now write a bio to tell the world about yourself. Help people get to know you at a glance. What work do you do best? Tell them clearly, using paragraphs or bullet points. You can always edit later; just make sure you proofread now.</p>
        <label>
          Your bio:
          <textarea name="bio" placeholder="Enter your bio here" required />
        </label>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  
    // ... existing code ...

case 11:
    return (
      <div className="option">
        <h1>Step 11: Add your services</h1>
        <p>What are the main services you offer? Choose at least one service that best describes the type of work you do. This helps us match you with clients who need your unique expertise.</p>
        <label>
          Your services:
          <input type="text" name="services" placeholder="Search for a service" required />
        </label>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  
    case 12:
        return (
          <div className="option">
            <h1>Step 12: Set your hourly rate</h1>
            <p>Now, let’s set your hourly rate. Clients will see this rate on your profile and in search results once you publish your profile. You can adjust your rate every time you submit a proposal.</p>
            <label>
              Hourly rate:
              <input type="number" name="hourlyRate" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} required />
            </label>
            <p>Total amount the client will see: ${hourlyRate}/hr</p>
            <p>Service fee: -${serviceFee}/hr</p>
            <p>You'll get: ${amountReceived}/hr</p>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );

        // ... existing code ...

case 13:
    return (
      <div className="option">
        <h1>Step 13: Add your personal details</h1>
        <p>A few last details, then you can check and publish your profile. A professional photo helps you build trust with your clients. To keep things safe and simple, they’ll pay you through us - which is why we need your personal information.</p>
        <label>
          Date of Birth:
          <input type="date" name="dob" required />
        </label>
        <label>
          Country:
          <input type="text" name="country" placeholder="Enter your country" required />
        </label>
        <label>
          Street address:
          <input type="text" name="address" placeholder="Enter your street address" required />
        </label>
        <label>
          City:
          <input type="text" name="city" placeholder="Enter your city" required />
        </label>
        <label>
          State/Province:
          <input type="text" name="state" placeholder="Enter your state/province" />
        </label>
        <label>
          ZIP/Postal code:
          <input type="text" name="zip" placeholder="Enter your ZIP/postal code" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
        </label>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  
    // ... existing code ...

case 14:
    return (
      <div className="option">
        <h1>Step 14: Upload your photo</h1>
        <p>Show clients the best version of yourself! Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not allowed.</p>
        <label>
          Your photo:
          <input type="file" name="photo" accept="image/*" required />
        </label>
        <p>250 x 250 Min size/ 5 MB Max size</p>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );

    case 15:
  return (
    <div className="option">
      <h1>Preview Profile</h1>
      <p>Looking good, Fazith! Make any edits you want, then submit your profile. You can make more changes after it’s live.</p>
      <h2>Fazith Ismail</h2>
      <p>Singapore, Central Singapore</p>
      <p>10:08 PM local time</p>
      <p>IOS Engineer</p>
      <p>Help people get to know you at a glance. What work do you do best? Tell them clearly, using paragraphs or bullet points. You can always edit later; just make sure you proofread now.</p>
      <p>$70.00 Hourly rate</p>
      <p>Skills: iOS</p>
      <h3>Work history</h3>
      <p>Microsoft | Software Engineer April 2022 - January 2023</p>
      <p>Worked as IOS Developer using flutter</p>
      <p>Microsoft | Tester January 2023 - Present</p>
      <p>Tester Application</p>
      <h3>Education</h3>
      <p>SJC Bachelor of Business Administration (BBA), Computer science 2010-2013</p>
      <p>BSC</p>
      <h3>Languages</h3>
      <p>English: Fluent</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  case 16:
  return (
    <div className="option">
      <h1>Nice work, Fazith!</h1>
      <p>Your profile’s ready. Congratulations! With thousands to choose from, it’s time to start bidding on roles that are the perfect fit for your skills.</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Submit</button>
    </div>
  );
  
  // ... existing code ...
  // ... existing code ...
  // ... existing code ...
  // ... existing code ...
  // ... existing code ...
  // ... existing code ...
  // ... existing code ...
    // Add more cases for more steps
    default:
      return null;
  }
}

export default Multistepcvbuilder;
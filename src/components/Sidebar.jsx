import { profile } from "../data/profile";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profile.avatar} alt={profile.name} className="avatar" />

      <h1>{profile.name}</h1>
      <p className="username">{profile.username}</p>

      <p className="bio">{profile.bio}</p>

      <button className="contact-btn">Follow / Contact</button>

      <div className="info">
        <p>📍 {profile.location}</p>
        <p>✉️ {profile.email}</p>
        <p>📞 {profile.phone}</p>
        <p>🔗 {profile.linkedin}</p>
      </div>

      <hr />

      <h3>Skills</h3>
      <div className="skills">
        {profile.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
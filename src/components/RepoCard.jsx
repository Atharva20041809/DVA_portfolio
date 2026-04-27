function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <img
        src={repo.image}
        alt={repo.name}
        className="repo-image"
      />

      <div className="repo-content">
        <div className="repo-header">
          <h3>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </h3>
          <span className="public-badge">Public</span>
        </div>

        <p className="repo-description">
          {repo.description || "No description available."}
        </p>

        <div className="topics">
          {repo.topics?.slice(0, 3).map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>

        <p className="language">
          <span className="dot"></span>
          {repo.language || "Other"}
        </p>
      </div>
    </div>
  );
}

export default RepoCard;
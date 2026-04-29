import { useState } from "react";
import RepoCard from "./RepoCard";

function RepoList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const repos = [
    {
      id: 1,
      name: "SectionC_G3_Salary_Visualization",
      description: "Salary visualization project using data analysis and charts.",
      html_url:
        "https://github.com/Atharva20041809/SectionC_G3_Salary_Visualization",
      language: "Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      topics: ["data", "visualization", "dashboard"],
    },
    {
      id: 2,
      name: "CoalTrack_Analysis",
      description: "Coal tracking and analysis project.",
      html_url: "https://github.com/Atharva20041809/CoalTrack_Analysis",
      language: "Python",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
      topics: ["coal", "analysis", "tracking"],
    },
    {
      id: 3,
      name: "Loan-Approval-System",
      description: "Machine learning project for loan approval prediction.",
      html_url: "https://github.com/Atharva20041809/Loan-Approval-System",
      language: "Python",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800",
      topics: ["machine-learning", "loan", "prediction"],
    },
    {
      id: 4,
      name: "House-Price-Prediction",
      description: "Machine learning model for predicting house prices.",
      html_url: "https://github.com/Atharva20041809/House-Price-Prediction",
      language: "Python",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      topics: ["ml", "regression", "real-estate"],
    },
  ];

  const languages = [
    "All",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "All" || repo.language === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="main-content">
      <div className="top-bar">
        <h2>
          Repositories <span>{repos.length}</span>
        </h2>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Find a repository..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setFilter(language)}
              className={filter === language ? "active" : ""}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      <div className="repo-grid">
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}

export default RepoList;
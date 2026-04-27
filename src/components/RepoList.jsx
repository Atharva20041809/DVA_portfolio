import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const username = "Atharva20041809";

  const selectedRepos = [
    {
      name: "SectionC_G3_Salary_Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      name: "SectionC_Group15_CoalTrack",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    },
    {
      name: "Loan-Approval-System",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800",
    },
    {
      name: "House-Price-Prediction",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    },
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) =>
            selectedRepos.some((item) => item.name === repo.name)
          )
          .map((repo) => {
            const matchedRepo = selectedRepos.find(
              (item) => item.name === repo.name
            );

            return {
              ...repo,
              image: matchedRepo.image,
            };
          });

        setRepos(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

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
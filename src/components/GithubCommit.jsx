import { useEffect, useState } from "react";

const GithubCommit = () => {
  const [lastUpdatedOn, setLastUpdate] = useState(null);
  useEffect(() => {
    async function getLastUpdateDate() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${
            import.meta.env.VITE_GITHUB_ACCOUNT
          }/${import.meta.env.VITE_GITHUB_REPO}/commits`
        );
        const data = await response.json();
        if (
          !Array.isArray(data) ||
          data.length === 0 ||
          !data[0]?.commit?.author?.date
        )
          return;
        const fullDate = data[0]?.commit?.author?.date;
        const date = fullDate.split("T")[0];
        setLastUpdate(date);
      } catch (error) {
        console.log("Error while fetching the date: ", error);
      }
    }

    getLastUpdateDate();
  }, []);
  return (
    <>
      {lastUpdatedOn && (
        <span className="my-2 text-light-text2 dark:text-dark-text2">
          Last updated: {lastUpdatedOn}
        </span>
      )}
    </>
  );
};

export default GithubCommit;

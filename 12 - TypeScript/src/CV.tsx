import { useState } from "react";

interface CVProps {
  name: string;
  currentJob: string;
  jobHistory: string[];
  children?: React.ReactDOM;
}

export function CV({ name, currentJob, jobHistory }: CVProps) {
  const [showJobHistory, setShowJobHistory] = useState<boolean>();

  const jsxFragment: React.ReactNode = <p>Current job: {currentJob}</p>;

  return (
    <>
      <h1>{name}</h1>
      {jsxFragment}

      <select
        onChange={(e) => {
          const shouldShowHistory = e.currentTarget.value === "show";
          setShowJobHistory(shouldShowHistory);
        }}
      >
        <option value="show">Show history</option>
        <option value="hide">Hide history</option>
      </select>

      {showJobHistory && (
        <>
          <h2>Job History:</h2>
          {jobHistory.map((job, index) => {
            return (
              <>
                <p key={index}>{job}</p>
              </>
            );
          })}
        </>
      )}
    </>
  );
}

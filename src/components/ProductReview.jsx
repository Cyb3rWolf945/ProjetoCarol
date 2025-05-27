import React, { useState } from "react";

function ProductReview({ text, yesCount = 0, noCount = 0 }) {
  const [yesVotes, setYesVotes] = useState(yesCount);
  const [noVotes, setNoVotes] = useState(noCount);
  const [voted, setVoted] = useState(null); // null | 'yes' | 'no'

  const handleVote = (type) => {
    if (voted) return; // já votou, não faz nada

    if (type === "yes") {
      setYesVotes(yesVotes + 1);
      setVoted("yes");
    } else if (type === "no") {
      setNoVotes(noVotes + 1);
      setVoted("no");
    }
  };

  return (
    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
      <p className="text-base font-normal text-gray-900">
        {text}
      </p>

      <div className="flex items-center gap-4">
        <p className="text-sm font-medium text-gray-500">
          Isto foi-lhe útil?
        </p>
        <div className="flex items-center">
          <input
            onClick={() => handleVote("yes")}
            id={`yes-${text}`}
            type="radio"
            name={`vote-${text}`}
            disabled={voted !== null}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label
            htmlFor={`yes-${text}`}
            className="ms-2 text-sm font-medium text-green-800"
          >
            Sim: {yesVotes}
          </label>
        </div>
        <div className="flex items-center">
          <input
            onClick={() => handleVote("no")}
            id={`no-${text}`}
            type="radio"
            name={`vote-${text}`}
            disabled={voted !== null}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label
            htmlFor={`no-${text}`}
            className="ms-2 text-sm font-medium text-red-800"
          >
            Não: {noVotes}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;

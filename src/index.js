import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bimal"
          timeAgo="Today at 5:30PM"
          img={faker.image.image()}
          content={"Nice!"}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Akhil"
          timeAgo="Today at 1:00AM"
          img={faker.image.image()}
          content={"Well done man!"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Hel"
          timeAgo="Yesterday at 4:33PM"
          img={faker.image.image()}
          content={"Chapri!"}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

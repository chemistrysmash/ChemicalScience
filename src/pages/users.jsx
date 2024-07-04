import { useEffect, useState } from "react";
import service from "./../services";

function UserPage() {

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default UserPage;

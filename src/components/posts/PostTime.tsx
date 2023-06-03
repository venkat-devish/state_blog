import { formatDistanceToNow, parseISO } from "date-fns";

const PostTime = (timestamp: any) => {
  let timeAgo = "";
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  timeAgo = `${timePeriod} ago.`;

  return (
    <span>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default PostTime;

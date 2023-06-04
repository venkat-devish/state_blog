import { formatDistanceToNow, parseISO } from "date-fns";

type TimeStampType = {
  timestamp: string;
};

const PostTime = ({ timestamp }: TimeStampType) => {
  let timeAgo = "";
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  timeAgo = `${timePeriod} ago.`;

  return (
    <span>
      &nbsp; <i>{timeAgo}</i>{" "}
    </span>
  );
};

export default PostTime;

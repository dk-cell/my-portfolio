const WorkItem = ({ data }) => {
  console.log("===>", data);
  return (
    <div className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li>
        <div />
        <p>
          <span>{data.year}</span>
          <span>{data.title}</span>
          <span>{data.duration}</span>
        </p>
      </li>
    </div>
  );
};

export default WorkItem;

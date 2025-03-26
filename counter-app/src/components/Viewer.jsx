const Viewer = ({ count }) => {
  return (
    <div>
      <p>현재 카운트 : </p>
      <h2>{count ? count : 0}</h2>
    </div>
  );
};

export default Viewer;

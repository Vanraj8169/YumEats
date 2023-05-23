import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const styles = {
  marginTop: "70px",
  width: "70px",
};

function CardSkeleton() {
  return (
    <SkeletonTheme highlightColor="#FEECEB">
      <div className="card">
        <Skeleton width={200} height={100} />
        <p className="card-Names">
          <Skeleton />
        </p>
        <p className="cuisines-names">
          <Skeleton />
        </p>
        <div className="rating-container">
          <Skeleton />
        </div>
        <div style={styles}>
          <Skeleton />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default CardSkeleton;

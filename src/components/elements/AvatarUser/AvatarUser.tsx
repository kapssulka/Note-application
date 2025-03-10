import classes from "./AvatarUser.module.scss";

interface IProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function AvatarUser({
  src,
  alt = "user avatar",
  size = 50,
}: IProps) {
  return (
    <div
      style={{ height: `${size}px`, width: `${size}px` }}
      className={classes.wrapper}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

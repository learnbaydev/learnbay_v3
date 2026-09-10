import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import styles from './AuthorCard.module.css';

/**
 * The author bio band: blue portrait panel with a diagonal edge, then name,
 * optional LinkedIn link and bio.
 *
 * `linkTo` turns the name into a link to the author's profile — used on the
 * index, omitted on the profile page itself so it does not link to where the
 * reader already is.
 */
const AuthorCard = ({ author, linkTo = false, postCount }) => {
  if (!author) return null;

  const href = `/blogs/author/${author.slug}`;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          className={styles.photo}
          src={author.photo}
          alt={author.name}
          width={148}
          height={148}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        {author.role && <p className={styles.role}>{author.role}</p>}

        <div className={styles.nameRow}>
          <h2 className={styles.name}>
            {linkTo ? <Link href={href}>{author.name}</Link> : author.name}
          </h2>
          {author.linkedin && (
            <a
              className={styles.linkedin}
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`${author.name} on LinkedIn`}
            >
              <FaLinkedin />
            </a>
          )}
        </div>

        <p className={styles.bio}>“{author.bio}”</p>

        {typeof postCount === 'number' && (
          <p className={styles.count}>
            {postCount} {postCount === 1 ? 'article' : 'articles'}
          </p>
        )}
      </div>
    </article>
  );
};

export default AuthorCard;

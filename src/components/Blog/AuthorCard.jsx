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
 *
 * `nameAs` sets the name's heading level: the profile page passes 'h1' so the
 * author's name is that page's main heading; lists keep the default 'h2'.
 */
const AuthorCard = ({ author, linkTo = false, postCount, nameAs = 'h2' }) => {
  if (!author) return null;

  const NameTag = nameAs;

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
          <NameTag className={styles.name}>
            {linkTo ? <Link href={href}>{author.name}</Link> : author.name}
          </NameTag>
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

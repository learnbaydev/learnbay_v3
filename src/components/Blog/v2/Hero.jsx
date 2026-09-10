import Link from 'next/link';
import { getAuthorByName, getAuthorHref } from '@/lib/blog/authors';
import styles from './Hero.module.css';

// `titleHighlight` is the tail of the headline the design sets in accent blue.
// Split on it so the two halves stay one wrapping paragraph rather than two.
function renderTitle(title, highlight) {
  if (!highlight) return title;
  const index = title.lastIndexOf(highlight);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className={styles.highlight}>{title.slice(index)}</span>
    </>
  );
}

// A fact pill reads "50+ programs reviewed": the leading value is emphasised.
// Authors write it as `{ value: '50+', label: 'programs reviewed' }`, or as a
// plain string when nothing needs emphasis.
function Fact({ fact }) {
  if (typeof fact === 'string') {
    return <span className={styles.fact}>{fact}</span>;
  }
  const { value, label, valueAfter } = fact;
  return (
    <span className={styles.fact}>
      {valueAfter ? (
        <>
          {label} <span className={styles.factValue}>{value}</span>
        </>
      ) : (
        <>
          <span className={styles.factValue}>{value}</span> {label}
        </>
      )}
    </span>
  );
}

const MetaItem = ({ label, value }) =>
  value ? (
    <div>
      <p className={styles.metaLabel}>{label}</p>
      <p className={styles.metaValue}>{value}</p>
    </div>
  ) : null;

/**
 * The AUTHOR slot in the hero meta column: photo, linked name and bio. This is
 * the byline the rail used to carry — it belongs beside the other article
 * metadata rather than halfway down the sidebar.
 */
const AuthorMeta = ({ post }) => {
  if (!post.author) return null;
  const href = getAuthorHref(post.author);
  const photo = getAuthorByName(post.author)?.photo;

  return (
    <div>
      <p className={styles.metaLabel}>AUTHOR</p>
      <div className={styles.author}>
        {photo ? (
          <img
            className={styles.authorPhoto}
            src={photo}
            alt={post.author}
            width={40}
            height={40}
            loading="lazy"
          />
        ) : (
          <span className={styles.authorInitials}>{post.authorInitials}</span>
        )}
        <p className={styles.metaValue}>
          {href ? <Link href={href}>{post.author}</Link> : post.author}
        </p>
      </div>
      {post.authorBio && <p className={styles.authorBio}>{post.authorBio}</p>}
    </div>
  );
};

const Hero = ({ post }) => (
  <header className={styles.hero}>
    <div className={styles.top}>
      <div className={styles.main}>
        {/* <Link href="/blogs" className={styles.back}>
          ← Back to blogs
        </Link> */}

        {post.eyebrow && <p className={styles.eyebrow}>{post.eyebrow}</p>}

        <h1 className={styles.title}>
          {renderTitle(post.title, post.titleHighlight)}
        </h1>

        {post.standfirst && (
          <p className={styles.standfirst}>{post.standfirst}</p>
        )}

        {post.facts?.length > 0 && (
          <div className={styles.facts}>
            {post.facts.map((fact, index) => (
              <Fact key={index} fact={fact} />
            ))}
          </div>
        )}
      </div>

      <div className={styles.meta}>
        <MetaItem label="LAST UPDATED" value={post.date} />
        <MetaItem label="CATEGORY" value={post.category} />
        <MetaItem label="READING TIME" value={post.readTime} />
        <AuthorMeta post={post} />
      </div>
    </div>

    {post.image && (
      <div className={styles.banner}>
        <img
          src={post.image}
          alt={post.alt}
          width={1280}
          height={427}
          fetchpriority="high"
        />
      </div>
    )}

    {post.caption && <p className={styles.caption}>{post.caption}</p>}
  </header>
);

export default Hero;

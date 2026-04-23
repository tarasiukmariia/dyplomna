import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

interface PostCardProps {
  title: string;
  excerpt: string;
  author?: string;
  href?: string;
  className?: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, author, href, className = '', imageUrl }) => {
  const Wrapper: React.ElementType = href ? Link : 'div';
  const wrapperProps = href ? { to: href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={`block p-6 bg-surface shadow-sm transition-transform hover:shadow-md dark:bg-surface-dark dark:shadow-[0_1px_6px_0_rgba(164,143,122,0.10)] dark:hover:shadow-[0_2px_12px_0_rgba(164,143,122,0.15)] border border-transparent hover:border-primary dark:hover:border-primary ${className}`}
      style={{
        borderRadius: '8px',
        transition: 'box-shadow 0.3s cubic-bezier(.4,0,.2,1), border-color 0.3s cubic-bezier(.4,0,.2,1)',
        ...(href ? { textDecoration: 'none' } : {})
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-4" style={{ borderRadius: '6px' }}
        />
      )}
      <h3 className="text-2xl font-bold text-primary mb-2 dark:text-primary">{title}</h3>
      {author && <div className="mb-2 text-sm text-text-muted dark:text-text-muted-dark">Автор: {author}</div>}
      <p className="text-text-muted dark:text-text-muted-dark mb-4">{excerpt}</p>
      <div className="flex gap-3 mt-2">
        <Button>Читати</Button>
        <Button variant="outline" className="hover:text-text-light">Зберегти</Button>
      </div>
    </Wrapper>
  );
};

export default PostCard;

import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton(id: number): void;
}

export function SideBar({genres, selectedGenreId, handleClickButton}: SideBarProps) {
  // Complete aqui
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

    </nav>
  )
}
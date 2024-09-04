import { NavLink, useParams } from 'react-router-dom';
import { Person } from '../../types';
import { findParentByName } from '../../utils/getParentsNames';
import classNames from 'classnames';

type Props = {
  name: string;
  sex: string;
  motherName: string | null;
  fatherName: string | null;
  slug: string;
  born: number;
  died: number;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({
  name,
  people,
  born,
  died,
  sex,
  motherName,
  fatherName,
  slug,
}) => {
  const { personSlug } = useParams();

  return (
    <tr
      data-cy="person"
      className={classNames({ 'has-background-warning': slug === personSlug })}
    >
      <td>
        <NavLink
          to={`/people/${slug}`}
          className={classNames({ 'has-text-danger': sex === 'f' })}
          replace
        >
          {name}
        </NavLink>
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{findParentByName(people, motherName)}</td>
      <td>{findParentByName(people, fatherName)}</td>
    </tr>
  );
};
import manImage1 from '../../assets/img/team/men/man1.jpg';
import manImage2 from '../../assets/img/team/men/man2.jpg';
import womanImage1 from '../../assets/img/team/women/woman1.jpg';
import defaultImage from '../../assets/img/avatars/maleAvatar.jpg'

export const nameToAvatarDict = {
    man1: manImage1,
    man2: manImage2,
    woman1: womanImage1,
    default: defaultImage
};

export const defaultMember = {
    firstname: '',
    lastname: '',
    role: 'Software Developer',
    skills: [],
    image: 'default'
};

export const brandNames = ['facebook', 'instagram', 'twitter'];

export const fullname = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
}

export const roles = ['Software Developer', 'Scrum Master', 'Product Owner'];

export const skills = [
    'Web developement',
    'Desktop developement',
    'Mobile developement',
    'Frontend',
    'Backend',
    'Databases',
]
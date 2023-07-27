import { IconButton, Stack, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMediaIconButton = styled((props) => {
  const { ...others } = props;
  return <IconButton {...others} />;
})(() => ({
  border: '1px solid #252733',
  color: '#252733',
  width: 40,
  height: 40,
}));

const socials = [
  {
    text: 'facebook',
    link: 'https://www.facebook.com/papapotchi',
    icon: <FacebookIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    text: 'instagram',
    link: 'https://www.instagram.com/haynakoban/',
    icon: <InstagramIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    text: 'twitter',
    link: 'https://twitter.com/papapottchi',
    icon: <TwitterIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    text: 'github',
    link: 'https://github.com/haynakoban',
    icon: <GitHubIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    text: 'linkedin',
    link: 'https://www.linkedin.com/in/ban-cortez/',
    icon: <LinkedInIcon sx={{ width: 24, height: 24 }} />,
  },
];

const SocialMedia = () => {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'row', md: 'column' }}
      justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start' }}
      width={{ xs: '100%', sm: '100%', md: '40px' }}
      spacing={2}
      mt={{ xs: 6, sm: 6, md: 15 }}
      mb={{ xs: 6, sm: 6, md: 0 }}
    >
      {socials.map(({ text, link, icon }) => {
        return (
          <SocialMediaIconButton
            key={text}
            aria-label={text}
            href={link}
            target='_blank'
          >
            {icon}
          </SocialMediaIconButton>
        );
      })}
    </Stack>
  );
};
export default SocialMedia;

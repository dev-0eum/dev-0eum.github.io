import React from 'react';

function Profile() {
  // 프로필 정보 (이 부분을 수정하면 됩니다)
  const profileData = {
    name: '당신의 이름',
    title: '개발자',
    bio: '안녕하세요! 저는 웹 개발을 공부하고 있습니다.',
    email: 'your.email@example.com',
    github: 'https://github.com/dev-0eum',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    projects: [
      {
        id: 1,
        title: '프로젝트 1',
        description: '프로젝트에 대한 설명을 여기에 입력하세요',
        link: '#'
      },
      {
        id: 2,
        title: '프로젝트 2',
        description: '프로젝트에 대한 설명을 여기에 입력하세요',
        link: '#'
      }
    ]
  };

  return (
    <div className="profile">
      {/* 프로필 헤더 섹션 */}
      <header className="profile-header">
        <div className="profile-avatar">
          {/* 프로필 이미지를 추가하려면 public 폴더에 이미지를 넣고 수정하세요 */}
          <img src="/images/avatar.jpg" alt="Profile Avatar" />
        </div>
        <h1>{profileData.name}</h1>
        <p className="title">{profileData.title}</p>
        <p className="bio">{profileData.bio}</p>
        
        {/* 소셜 링크 */}
        <div className="social-links">
          <a href={`mailto:${profileData.email}`} className="link">이메일</a>
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        </div>
      </header>

      {/* 스킬 섹션 */}
      <section className="skills-section">
        <h2>스킬</h2>
        <div className="skills-list">
          {profileData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="projects-section">
        <h2>프로젝트</h2>
        <div className="projects-grid">
          {profileData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">자세히 보기</a>
            </div>
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="profile-footer">
        <p>&copy; 2026 {profileData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;

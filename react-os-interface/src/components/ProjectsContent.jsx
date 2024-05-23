import projectIcon from '../assets/folder-purple.webp';
import Icon from './Icon';
import RanSomeWhereDescription from './RanSomeWhereDescription';
import BabyGuardiansDescription from './BabyGuardiansDescription';
import SalamatDescription from './SalamatDescription';

function ProjectsContent({ openProject }) {
  return (
    <div>

      <div className="grid grid-cols-3 gap-4">
        <Icon title="RanSomeWhere" icon={projectIcon} onDoubleClick={() => openProject('RanSomeWhere', <RanSomeWhereDescription />)} />
        <Icon title="BabyGuardians" icon={projectIcon} onDoubleClick={() => openProject('BabyGuardians', <BabyGuardiansDescription />)} />
        <Icon title="SALAMAT" icon={projectIcon} onDoubleClick={() => openProject('SALAMAT', <SalamatDescription />)} />
      </div>
    </div>
  );
}

export default ProjectsContent;

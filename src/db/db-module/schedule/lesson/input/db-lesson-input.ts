import { LessonCoachRole } from '../../lesson_coach/enums/LessonCoachRole';

interface CoachWithRoleInput {
  id: number;
  role: LessonCoachRole;
}

export interface CreateLessonInput {
  campId: number;
  startDate: string;
  endDate: string;
  activityTypeId: number;
  auditoriumId: number;
  lessonTypeId: number;
  coaches: CoachWithRoleInput[];
  groupIds: number[];
  sportsmanIds: number[];
}

export type UpdateLessonInput = Partial<Omit<CreateLessonInput, 'campId'>>;

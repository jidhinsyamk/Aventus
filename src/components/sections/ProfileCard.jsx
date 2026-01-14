import Container from "../Container";
import Card from "../Card";
import Icon from "../Icon";
import { useStyleFromConfig } from "../../hooks/useStyleFromConfig";
import { useUser } from "../../hooks/useUser";

const ProfileCard = ({ props: sectionProps }) => {
  const { getColorStyle } = useStyleFromConfig();
  const { user: configUser } = useUser();
  const { user: sectionUser, stats } = sectionProps;
  const user = sectionUser || configUser;

  return (
    <section className="py-8 sm:py-12">
      <Container maxWidth="6xl">
        <Card className="mb-6 sm:mb-8 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 right-0 h-32 sm:h-40"
            style={{
              background: `linear-gradient(135deg, ${getColorStyle(
                "primary"
              )}, ${getColorStyle("secondary")})`,
              opacity: 0.1,
            }}
          />

          <div className="relative z-10 pt-8 sm:pt-12 pb-6 sm:pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              <div className="relative">
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-offset-4 transition-transform duration-200 hover:scale-105"
                  style={{
                    backgroundColor: getColorStyle("primary"),
                    color: "#ffffff",
                    ringColor: getColorStyle("surface"),
                    ringOffsetColor: getColorStyle("background"),
                  }}
                >
                  <Icon
                    name={user.avatar}
                    size={48}
                    className="sm:w-16 sm:h-16"
                  />
                </div>

                <div
                  className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2"
                  style={{
                    backgroundColor: "#10b981",
                    borderColor: getColorStyle("surface"),
                  }}
                />
              </div>

              <div className="flex-1 text-center md:text-left w-full">
                <div className="mb-4">
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: getColorStyle("text.primary") }}
                  >
                    {user.name}
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-3">
                    <p
                      className="text-base sm:text-lg break-all sm:break-normal"
                      style={{ color: getColorStyle("text.secondary") }}
                    >
                      {user.email}
                    </p>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      style={{
                        backgroundColor: `${getColorStyle("primary")}15`,
                        color: getColorStyle("primary"),
                      }}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm sm:text-base leading-relaxed mb-4 max-w-2xl"
                  style={{ color: getColorStyle("text.secondary") }}
                >
                  {user.bio}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="user"
                      size={14}
                      style={{ color: getColorStyle("text.muted") }}
                    />
                    <span style={{ color: getColorStyle("text.muted") }}>
                      Member since{" "}
                      {new Date(user.joinDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  {user.lastActive && (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#10b981" }}
                      />
                      <span style={{ color: getColorStyle("text.muted") }}>
                        Active {user.lastActive}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${getColorStyle("primary")}15`,
                    color: getColorStyle("primary"),
                  }}
                >
                  {stat.icon && (
                    <Icon
                      name={stat.icon}
                      size={24}
                      className="sm:w-7 sm:h-7"
                    />
                  )}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: getColorStyle("text.primary") }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: getColorStyle("text.secondary") }}
                >
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProfileCard;

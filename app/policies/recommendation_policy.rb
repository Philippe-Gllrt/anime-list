class RecommendationPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end

  def create?
    true
  end

  def new?
    true
  end

  def index?
    user.admin? ? scope.all : scope.where(user: user)
  end
end

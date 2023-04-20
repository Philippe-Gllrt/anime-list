class AnimePolicy < ApplicationPolicy
  # class Scope < Scope
  #   # NOTE: Be explicit about which records you allow access to!
  def resolve
    scope.all
  end
  # end

  def index?
    true
  end

  def show?
    true
  end

  def new?
    user.admin? ? scope.all : scope.where(user: user)
  end

  def create?
    user.admin? ? scope.all : scope.where(user: user)
  end
end
